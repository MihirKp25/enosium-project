from flask import Flask,request, url_for, redirect, render_template
import pickle
import joblib
import numpy as np
import tensorflow as tf
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
model = tf.keras.models.load_model('my-model.h5')



# @app.route('/')
# def hello_world():
#     return render_template("index.js")


@app.route('/predict',methods=['POST','GET'])
def predict():
    
    # final=[np.array(int_features)]
    # print(int_features)
    # print(final)
    # prediction=model.predict_proba(final)
    # output='{0:.{1}f}'.format(prediction[0][1], 2)
    if request.method == 'GET':
        return {'req':'successful'}
    if request.method == 'POST':
        # print(request.get_json().'loan_history')
        object=request.get_json()
        object=object.values()
        arr=[int(i) for i in list(object)]
        # print(arr)
        arr=np.array(arr)
        arr=np.expand_dims(arr,0)
        print(arr.shape)
        prediction = model.predict(arr)
        percentage = prediction[0][0]*100
        percentage=str(int(percentage))

        print(percentage)
        print(prediction)
        # return '{}'.format(percentage)
        return percentage
        # return {'percentage':prediction}
        
        # return prediction
        # print(object['check_telephone'])
        # print(object.items().values())
        # int_features=[int(value) for value in list(object.values())]
        # print(int_features)


    


        # int_features=[int(x) for x in (request.get_json())]
        # print(int_features)


        # print({'post-req':'successful'})
        return {'post-req':'predict hogya'}

    
    

    # if output>str(0.5):
    #     return render_template('./components/percentagemeter.jsx',percentage='{}'.format(output))
    # else:
    #     return render_template('./components/percentagemeter.jsx',percentage='{}'.format(output))


if __name__ == '__main__':
    app.run(debug=True)