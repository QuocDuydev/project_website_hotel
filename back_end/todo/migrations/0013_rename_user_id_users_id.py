# Generated by Django 5.0.2 on 2024-03-19 04:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0012_rename_id_booking_booking_id_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='users',
            old_name='user_id',
            new_name='id',
        ),
    ]