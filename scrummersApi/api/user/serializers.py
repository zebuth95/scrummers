from .models import CustomUser
from rest_framework import serializers

class CustomUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = CustomUser
        extra_kwargs = {
            'password': {'write_only': True, 'required': False}
        }
        fields = '__all__'