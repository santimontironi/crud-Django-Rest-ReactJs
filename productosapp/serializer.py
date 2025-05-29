from rest_framework import serializers
from .models import Producto
from django.contrib.auth.models import User

class ProductoSerializer(serializers.ModelSerializer):
    imagen = serializers.ImageField(use_url=True)
    class Meta:
        model = Producto
        fields = '__all__'
        
        
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username','password','email']
        
    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data.get('email'),
            password=validated_data['password']
        )
        return user