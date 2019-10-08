from django.shortcuts import render
# Views creates all you GET, POST, PUT, and DELETE routes 
from rest_framework import viewsets    
from .serializers import UserSerializer, ServiceSerializer, PasswordSerializer     
from .models import User, Service, Password   

# add these imports for React
from django.urls import path, include, re_path
from . import views
                                                                    
    
class UserViewSet(viewsets.ModelViewSet): 
    # """ are a multiline string shortcut that ignores new lines i.e replaces multi-line comments
    """    
    API endpoint that allows users to be viewed or edited.    
    """    
    queryset = User.objects.all()    #enables grab & autogenerate all information from database
    serializer_class = UserSerializer #tells django how you want objects in database to be sent out to web

class ServiceViewSet(viewsets.ModelViewSet): 
    # """ are a multiline string shortcut that ignores new lines i.e replaces multi-line comments
    """    
    API endpoint that allows users to be viewed or edited.    
    """    
    queryset = Service.objects.all()    #enables grab & autogenerate all information from database
    serializer_class = ServiceSerializer #tells django how you want objects in database to be sent out to web

class PasswordViewSet(viewsets.ModelViewSet): 
    # """ are a multiline string shortcut that ignores new lines i.e replaces multi-line comments
    """    
    API endpoint that allows users to be viewed or edited.    
    """    
    queryset = Password.objects.all()    #enables grab & autogenerate all information from database
    serializer_class = PasswordSerializer #tells django how you want objects in database to be sent out to web


