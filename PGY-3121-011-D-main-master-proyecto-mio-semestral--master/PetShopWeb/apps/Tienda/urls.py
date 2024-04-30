from django.urls import path
from . import views

from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static 


urlpatterns = [
    path('',views.cargarInicio),
    path('Login', views.Login),
    path('RegistroUsuario', views.RegistroUsuario), 
    path('agregarProductoForm',views.agregarProducto),
    path('editarProductoForm',views.editarProductoForm),
    path('eliminarProducto/<sku>',views.eliminarProducto),
    path('carrito',views.carrito),
    path('agregarProducto',views.cargarAgregarProducto),
    path('editarProducto/<sku>',views.cargarEditarProducto),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)