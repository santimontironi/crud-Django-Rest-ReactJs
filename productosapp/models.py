from django.db import models

# Create your models here.
class Producto(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField(max_length=200)
    stock = models.PositiveIntegerField(default=0)
    precio = models.DecimalField(max_digits=8,decimal_places=2)
    imagen = models.ImageField(upload_to='productos/', blank=True, null=True)