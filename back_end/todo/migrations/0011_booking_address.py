# Generated by Django 5.0.2 on 2024-03-18 09:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0010_remove_users_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='booking',
            name='address',
            field=models.CharField(default=int),
            preserve_default=False,
        ),
    ]
