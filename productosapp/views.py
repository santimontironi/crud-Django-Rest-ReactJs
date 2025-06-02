from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .models import Producto
from rest_framework.generics import CreateAPIView
from django.contrib.auth.models import User
from django.core.mail import send_mail
from .serializer import ProductoSerializer, UserSerializer
from rest_framework.permissions import IsAuthenticated

# Create your views here...
class ProductoView(viewsets.ModelViewSet):
    serializer_class = ProductoSerializer
    queryset = Producto.objects.all()
    permission_classes = [IsAuthenticated] # Obligatorio el estar autenticado

class UserView(CreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = [AllowAny]  # Permite acceso sin token de autenticación