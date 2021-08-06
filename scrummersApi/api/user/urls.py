from rest_framework import routers
from django.urls import path, include
from .views import CustomUserViewSet

router = routers.DefaultRouter()
router.register(r'', CustomUserViewSet)

urlpatterns = [
    path('', include(router.urls))
]