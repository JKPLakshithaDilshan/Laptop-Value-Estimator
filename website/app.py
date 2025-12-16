from flask import Flask, render_template, request, redirect, url_for, session
import pickle
import numpy as np

# setup application
app = Flask(__name__)
app.secret_key = 'your-secret-key-here-change-in-production'  # Required for session

def prediction(lst):
    filename = 'model/predictor.pickle'
    with open(filename, 'rb') as file:
        model = pickle.load(file)
    pred_value = model.predict([lst])
    return pred_value

@app.route('/', methods=['POST', 'GET'])
def index():
    # return "Hello World"
    pred_value = None
    form_data = {}
    
    # Retrieve data from session if available
    if 'pred_value' in session:
        pred_value = session.pop('pred_value')
    if 'form_data' in session:
        form_data = session.pop('form_data')
    
    if request.method == 'POST':
        ram = request.form.get('ram')
        weight = request.form.get('weight')
        company = request.form.get('company')
        typename = request.form.get('typename')
        opsys = request.form.get('opsys')
        cpu = request.form.get('cpuname')
        gpu = request.form.get('gpuname')
        touchscreen = request.form.getlist('touchscreen')
        ips = request.form.getlist('ips')
        
        # Store form data to retain values
        form_data = {
            'ram': ram,
            'weight': weight,
            'company': company,
            'typename': typename,
            'opsys': opsys,
            'cpu': cpu,
            'gpu': gpu,
            'touchscreen': 'on' if touchscreen else '',
            'ips': 'on' if ips else ''
        }
        
        # Validate all required fields are filled
        if all([ram, weight, company, typename, opsys, cpu, gpu]):
            feature_list = []

            feature_list.append(int(ram))
            feature_list.append(float(weight))
            feature_list.append(len(touchscreen))
            feature_list.append(len(ips))

            company_list = ['acer','apple','asus','dell','hp','lenovo','msi','other','toshiba']
            typename_list = ['2in1convertible','gaming','netbook','notebook','ultrabook','workstation']
            opsys_list = ['linux','mac','other','windows']
            cpu_list = ['amd','intelcorei3','intelcorei5','intelcorei7','other']
            gpu_list = ['amd','intel','nvidia']

            # for item in company_list:
            #     if item == company:
            #         feature_list.append(1)
            #     else:
            #         feature_list.append(0)

            def traverse_list(lst, value):
                for item in lst:
                    if item == value:
                        feature_list.append(1)
                    else:
                        feature_list.append(0)
            
            traverse_list(company_list, company)
            traverse_list(typename_list, typename)
            traverse_list(opsys_list, opsys)
            traverse_list(cpu_list, cpu)
            traverse_list(gpu_list, gpu)

            pred_value = prediction(feature_list)
            pred_value = round(pred_value[0] * 221, 2)
            
            # Store in session and redirect to prevent form resubmission
            session['pred_value'] = pred_value
            session['form_data'] = form_data
            return redirect(url_for('index'))

    return render_template('index.html', pred_value=pred_value, form_data=form_data)


if __name__ == '__main__':
    app.run(debug=True)
