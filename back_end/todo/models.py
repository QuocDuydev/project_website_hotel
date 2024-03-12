from django.db import models

class User(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length = 100)
    name = models.CharField(max_length = 100)
    email = models.CharField(max_length = 200)
    password = models.CharField(max_length = 100)
    joined = models.DateField()
    ACCOUNT_TYPES = [
        ('user', 'Người dùng'),
        ('admin', 'Quản trị viên'),
        ('superadmin', 'Quản trị viên cấp cao'),
    ]
    account_type = models.CharField(
        max_length=10,
        choices=ACCOUNT_TYPES,
        default='user',  # Giá trị mặc định có thể là 'user' hoặc 'admin'
    )
    def __str__(self):
        return f"{self.id},{self.username}, {self.name}, {self.email},{self.password}, {self.account_type},{self.joined}"
class Hotels(models.Model):
    id = models.AutoField(primary_key=True)
    hotelname = models.CharField(max_length = 100)
    hotelimage = models.ImageField(upload_to='hotel_images/')
    descriptions = models.TextField()
    totalroom = models.IntegerField()
    roommap = models.CharField(max_length = 200)
    location = models.CharField(max_length = 300)
    rating = models.IntegerField()
    dateadded = models.DateField()
    def __str__(self):
        return f"{self.id},{self.hotelname}, {self.hotelimage}, {self.descriptions},{self.totalroom},{self.roommap},{self.location}, {self.rating}, {self.dateadded}"
    
class Rooms(models.Model):
    id = models.AutoField(primary_key=True)
    hotel = models.ForeignKey(Hotels, on_delete=models.CASCADE)
    roomname = models.CharField(max_length = 100)
    roomimage = models.ImageField(upload_to='room_images/')
    descriptions = models.TextField()
    roomprice = models.IntegerField()
    roomnumber = models.IntegerField()
    roomoccupancy = models.IntegerField()
    dateadded = models.DateField()
    def __str__(self):
        return f"{self.id}, {self.hotel}, {self.roomname}, {self.roomimage}, {self.descriptions},{self.roomprice},{self.roomnumber},{self.roomoccupancy}, {self.dateadded}"
    
