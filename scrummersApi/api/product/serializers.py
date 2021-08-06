from .models import Product
from rest_framework import serializers


class ProductSerializer(serializers.ModelSerializer):
    category_name = serializers.SerializerMethodField('getCategoryName')

    class Meta:
        model = Product
        fields = '__all__'

    def getCategoryName(self, instance):
        return instance.category.name or ''
