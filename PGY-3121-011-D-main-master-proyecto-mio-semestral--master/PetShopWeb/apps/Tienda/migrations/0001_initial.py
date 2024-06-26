# Generated by Django 4.2.1 on 2023-07-11 04:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='categoria',
            fields=[
                ('categoria_id', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='productos',
            fields=[
                ('id', models.CharField(max_length=6, primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=100)),
                ('descripcion', models.CharField(max_length=150)),
                ('precio', models.IntegerField()),
                ('stock', models.IntegerField()),
                ('fecha_ingreso', models.DateField(auto_now_add=True)),
                ('fecha_vencimiento', models.DateField(blank=True, null=True)),
                ('image_url', models.ImageField(upload_to='imagenesProductos')),
                ('categoriaId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Tienda.categoria')),
            ],
        ),
    ]
