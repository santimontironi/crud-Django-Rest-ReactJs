from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductoView

router = DefaultRouter() # el objeto router se encargará de crear las rutas automáticamente para el ProductoView.
router.register(r'productos',ProductoView) #se registra el viewset ProductoView con el nombre productos.

urlpatterns = [
    path('',include(router.urls))
]