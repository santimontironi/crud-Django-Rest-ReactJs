from rest_framework import viewsets
from .models import Producto
from rest_framework.generics import CreateAPIView
from django.contrib.auth import User
from .serializer import ProductoSerializer, UserSerializer
from rest_framework.permissions import IsAuthenticated

# Create your views here...
class ProductoView(viewsets.ModelViewSet):
    serializer_class = ProductoSerializer
    queryset = Producto.objects.all()
    permission_classes = [IsAuthenticated]

class UserView(CreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()