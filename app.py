# import dash
# import dash_core_components as dcc
# import dash_html_components as html
# import plotly.express as px
# import pandas as pd
# import csv
# # df = pd.read_csv("sample_headcount.txt")
# # with open('sample_headcount.txt', mode='r') as csv_file:
# #     csv_reader = csv.DictReader(csv_file)
# #     line_count = 0
# #     months = []
# #     headcounts = []
# #     company = []
# # #     for i,row in enumerate(csv_reader):
# # #             if i == 0:
# # #                 continue
# # #             months.append(row['month'])
# # #             headcounts.append(row['headcount'])
# # #             company.append(row['company'])
# external_stylesheets = ['https://codepen.io/chriddyp/pen/bWLwgP.css']

# app = dash.Dash(__name__, external_stylesheets=external_stylesheets)

# # assume you have a "long-form" data frame
# # see https://plotly.com/python/px-arguments/ for more options
# # df = pd.DataFrame({
# #     "month": months[0:500],
# #     "headcount": headcounts[0:500],
# #     "company": company[0:500]
# # })
# # company,month,headcount
# # df = px.data.gapminder().query("continent != 'Asia'") # remove Asia for visibility
# fig = px.line(df, x="month", y="headcount",
#               line_group="company", hover_name="company",height=
# 300,width=960.31)

# fig.update_layout( 
#     updatemenus=[ 
#         dict( 
#             buttons=list([ 
#                 dict( 
#                     args=["type", "scatter"], 
#                     label="Scatter Plot", 
#                     method="restyle"
#                 ), 
#                 dict( 
#                     args=["type", "bar"], 
#                     label="Bar Chart", 
#                     method="restyle"
#                 ) 
#             ]), 
#             direction="down", 
#         ), 
#     ] 
# ) 
# app.layout = html.Div(children=[
#     html.Div(className="rectangle",children=[
#         html.Div(className="menu-item"),
#         html.Div(className="menu-item"),
#         html.Div(className="menu-item")
#     ]),
#     html.Div(id="nav",children=[
#         html.Div(className='drawer',children=[
#             html.Ul(children=[
#                 html.Li(children=[
#                     html.Div(className='active-tab'),
#                     "General Overview"
#                 ])
#             ])
#         ]

#         )
        
#     ]),
# # dcc.Graph(
# #         id='example-graph',
# #         figure=fig,

# #     )
#      html.Div(className="Dashboard",children=[
#          html.H1("Trends")
#      ]
#          ),
#          html.Div(className="graph",children=[dcc.Graph(
#         id='example-graph',
#         figure=fig,

#     )])
 
# ])  

# if __name__ == '__main__':
#     app.run_server(debug=True)