# Generated by Django 5.0.3 on 2024-04-03 03:08

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0021_booking_datebooking'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='rooms',
            name='roomimage',
        ),
        migrations.AddField(
            model_name='rooms',
            name='status',
            field=models.CharField(choices=[('simple', 'Simple'), ('double', 'Double'), ('family', 'Family')], default=str, max_length=10),
            preserve_default=False,
        ),
        migrations.CreateModel(
            name='RoomImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='room_images/')),
                ('room', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='todo.rooms')),
            ],
        ),
    ]