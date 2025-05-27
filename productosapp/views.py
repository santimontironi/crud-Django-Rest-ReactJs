from rest_framework import viewsets
from .models import Producto
from .serializer import ProductoSerializer
from rest_framework.permissions import IsAuthenticated

# Create your views here...
class ProductoView(viewsets.ModelViewSet):
    serializer_class = ProductoSerializer
    queryset = Producto.objects.all()
    permission_classes = [IsAuthenticated]

