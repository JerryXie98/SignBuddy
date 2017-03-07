# SignBuddy
Devpost: https://devpost.com/software/cuhacking

## Overview
There are 70 million people around the world who prefer to use sign language as their mother tongue, and we wanted to provide a way for these people to experience functional video chat technology the same way as everyone does - by speaking in your mother tongue instead of typing. SignBuddy is a simple web interface where the user can sign in front of a Leap Motion device. The application uses the Leap API to recognize the hand object and finds the closest match to previously trained sample data. The translation is then displayed on our interactive text panel for the video partner to read.  
SignBuddy was the winner of best machine learning app at CUHacking 2017.

## Local Installation

To run it locally:
* Clone the repository
* Install all the packages with `pip install -r requirements.txt`
* Run server with `python app.py`
* Open a browser to the IP given from console
* Click the button (is this working?), OR manually navigate to `<app-ip-address>/videochat`

![SignBuddy2](http://i.imgur.com/9Z0Sjit.png/ "SignBuddy2")
