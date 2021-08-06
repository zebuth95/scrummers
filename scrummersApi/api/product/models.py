from django.db import models
from api.category.models import Category


class Product(models.Model):
    title = models.CharField(max_length=120)
    description = models.CharField(max_length=256)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, related_name="categories", blank=True, null=True)
    price = models.FloatField(default=10)

    def __str__(self):
        return self.title or ''