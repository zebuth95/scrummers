from django.db import models

class Category(models.Model):

    name = models.CharField(max_length=80)
    description = models.CharField(max_length=256, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name or ''
