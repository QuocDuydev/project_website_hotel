# Generated by Django 5.0.2 on 2024-03-06 01:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Rooms',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('roomname', models.CharField(max_length=100)),
                ('roomimage', models.FileField(upload_to='')),
                ('descriptions', models.TextField()),
                ('roomprice', models.IntegerField()),
                ('roomnumber', models.IntegerField()),
                ('roomoccupancy', models.IntegerField()),
                ('dateadded', models.DateField()),
            ],
        ),
    ]
