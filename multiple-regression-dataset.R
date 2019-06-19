library(gtools)
data <- read.csv("diabetes.csv")


plot(data)
multiple.regression <- lm(Outcome ~ Pregnancies + Glucose + BloodPressure + SkinThickness + Insulin + BMI + DiabetesPedigreeFunction + Age , data=data)
summary(multiple.regression)

