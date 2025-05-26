from rest_framework import serializers
from .models import Producto

class ProductoSerializer(serializers.ModelSerializer):
    imagen = serializers.ImageField(use_url=False)
    class Meta:
        model = Producto
        fields = '__all__'