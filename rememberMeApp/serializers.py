from rest_framework import serializers    
from .models import User, Service, Password
     
class UserSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = User    
        fields = ['id', 'userName'] #pieces of serializer to convert to and from JSON data
            #spelling MUST match what is in on models
    
class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ['id','serviceName']

#Password Field        
class PasswordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Password
        fields = ['id','passwordField']