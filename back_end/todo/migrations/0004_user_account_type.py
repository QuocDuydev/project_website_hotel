# Generated by Django 5.0.2 on 2024-03-08 02:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0003_hotels_alter_rooms_roomimage'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='account_type',
            field=models.CharField(choices=[('user', 'Người dùng'), ('admin', 'Quản trị viên'), ('superadmin', 'Quản trị viên cấp cao')], default='user', max_length=10),
        ),
    ]
