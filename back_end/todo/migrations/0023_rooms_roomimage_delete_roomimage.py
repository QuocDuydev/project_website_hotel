# Generated by Django 5.0.3 on 2024-04-03 03:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0022_remove_rooms_roomimage_rooms_status_roomimage'),
    ]

    operations = [
        migrations.AddField(
            model_name='rooms',
            name='roomimage',
            field=models.ImageField(default=str, upload_to='room_images/'),
            preserve_default=False,
        ),
        migrations.DeleteModel(
            name='RoomImage',
        ),
    ]
