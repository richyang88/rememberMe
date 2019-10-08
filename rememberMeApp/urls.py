from django.urls import include, path                  
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'user', views.UserViewSet) #similar to app.use('/todoItem/), toDoRouter
router.register(r'service', views.ServiceViewSet) #similar to app.use('/user/), userRouter
router.register(r'password', views.PasswordViewSet) #similar to app.use('/user/), userRouter
                # r = regular expression i.e. RegEx
                # DO NOT put '/' before 'todoItem'. 
                    #However, when you make requests (ex. GET, POST, DELETE, PUT), you MUST put /

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    # path('api', include(router.urls)), woudl add api before ALL urls
]