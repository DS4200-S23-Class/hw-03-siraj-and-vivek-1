import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt

data = pd.read_csv("Glassdoor Gender Pay Gap.csv")
data['total_pay'] = data["BasePay"] + data["Bonus"]
plot = sns.barplot(data=data,x="JobTitle",y="total_pay", hue='Gender',palette={"Female": "pink", "Male": "LightBlue"},errorbar=None)
plot.set(xlabel='Positions', ylabel='Total Compensation')
plt.title('Salary Difference Between Males and Females')
plot.set_xticklabels(labels=data['JobTitle'].unique(), rotation=90)
plt.savefig("vis3.png",bbox_inches="tight")
