from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .models import Producto
from rest_framework.generics import CreateAPIView
from django.contrib.auth.models import User
from django.core.mail import send_mail
from .serializer import ProductoSerializer, UserSerializer
from rest_framework.permissions import IsAuthenticated
from productos.settings import EMAIL_HOST_USER as emisor

# Create your views here...
class ProductoView(viewsets.ModelViewSet):
    serializer_class = ProductoSerializer
    queryset = Producto.objects.all()
    permission_classes = [IsAuthenticated] # Obligatorio el estar autenticado

class UserView(CreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = [AllowAny]  # Permite acceso sin token de autenticación
    
    #esta función es para manejar logica una vez creado el usuario
    def perform_create(self, serializer):
        user = serializer.save()
        send_mail(
            subject='Bienvenido al sistema.',
            message=f'Hola {user.username}, gracias por registrarte en tuGestor.',
            from_email=emisor,
            recipient_list=[user.email],
            fail_silently=False,  #Si hay un error, no se ignora
        )