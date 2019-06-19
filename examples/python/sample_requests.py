'''
requests is a simple library for getting api data

NOTE: DO NOT name your file requests.py. 
As a whole...DONT  name a file after a library.
Python will have conflicts. It will be bad for everyone!

'''

import requests
from requests import get
r = requests.get('http://httpbin.org/get')
print (r.status_code)