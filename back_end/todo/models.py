from django.db import models

class User(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length = 100)
    name = models.CharField(max_length = 100)
    email = models.CharField(max_length = 200)
    password = models.CharField(max_length = 100)
    joined = models.DateField()
    def __str__(self):
        return f"{self.id},{self.username}, {self.name}, {self.email},{self.password}, {self.joined}"

class Rooms(models.Model):
    id = models.AutoField(primary_key=True)
    roomname = models.CharField(max_length = 100)
    roomimage = models.ImageField(upload_to='room_images/')
    descriptions = models.TextField()
    roomprice = models.IntegerField()
    roomnumber = models.IntegerField()
    roomoccupancy = models.IntegerField()
    dateadded = models.DateField()
    def __str__(self):
        return f"{self.id},{self.roomname}, {self.roomimage}, {self.descriptions},{self.roomprice},{self.roomnumber},{self.roomoccupancy}, {self.dateadded}"
