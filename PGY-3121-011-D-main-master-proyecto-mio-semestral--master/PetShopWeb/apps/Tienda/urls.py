from django.urls import path
from . import views

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
]