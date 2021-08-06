from django.urls import path, include


urlpatterns = [
    path('user/', include('api.user.urls')),
    path('category/', include('api.category.urls')),
    path('product/', include('api.product.urls')),
]