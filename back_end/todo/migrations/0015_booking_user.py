# Generated by Django 5.0.2 on 2024-03-19 08:59

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0014_remove_booking_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='booking',
            name='user',
            field=models.ForeignKey(default=int, on_delete=django.db.models.deletion.CASCADE, to='todo.users'),
            preserve_default=False,
        ),
    ]