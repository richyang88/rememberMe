from django.db import models

# Create your models here.
#Note: models. --> python class inheritance 
class User(models.Model):
    
    userName = models.CharField(max_length = 30)

#Django field data link: https://docs.djangoproject.com/en/2.2/ref/models/fields/

class Service(models.Model):
    serviceName= models.CharField(max_length = 50)
    # user = models.ForeignKey(User, default=1, on_delete=models.CASCADE, related_name='users')
# Password class

class Password(models.Model):
    passwordField = models.CharField(max_length = 50)
    # service = models.ForeignKey(Service, default=1, on_delete=models.CASCADE, related_name='services')