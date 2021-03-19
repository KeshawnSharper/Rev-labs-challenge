from django.shortcuts import render
from rest_framework.response import Response
import pandas as pd
import csv
from rest_framework.views import APIView
import sqlite3
# df = pd.read_csv("sample_headcount.txt")

class TestView(APIView):
    def get(self,request,*args,**kwargs):
        data = {}
        connection = sqlite3.connect('/Users/lambda_school_loaner_182/Documents/Rev-labs-challenge/be/db.sqlite3')
        results = connection.cursor().execute('SELECT * FROM rev_labs').fetchall()
        for row in results:
            if row[0] in data:
                data[row[0]][0].append(row[1])
                data[row[0]][1].append(float(row[2].strip(' "')))
            else:
                data[row[0]] = [[row[1]],[float(row[2].strip(' "'))],False]
                print(data)
            
        return Response(data)