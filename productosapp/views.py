from rest_framework import viewsets
from .models import Producto
from .serializer import ProductoSerializer

# Create your views here...
class ProductoView(viewsets.ModelViewSet):
    serializer_class = ProductoSerializer
    queryset = Producto.objects.all()
