from django.db import models

class Users(models.Model):
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
        return f"{self.username}"
class Hotels(models.Model):
    hotel_id = models.AutoField(primary_key=True)
    hotelname = models.CharField(max_length = 100)
    hotelimage = models.ImageField(upload_to='hotel_images/')
    descriptions = models.TextField()
    totalroom = models.IntegerField()
    roommap = models.CharField(max_length = 200)
    location = models.CharField(max_length = 300)
    rating = models.IntegerField()
    dateadded = models.DateField()
    def __str__(self):
        return f"{self.hotelname}"
    
class Rooms(models.Model):
    room_id = models.AutoField(primary_key=True)
    hotel = models.ForeignKey(Hotels, on_delete=models.CASCADE)
    roomname = models.CharField(max_length = 100)
    roomimage = models.ImageField(upload_to='room_images/')
    descriptions = models.TextField()
    roomprice = models.IntegerField()
    roomnumber = models.IntegerField()
    roomoccupancy = models.IntegerField()
    dateadded = models.DateField()
    def __str__(self):
        return f"{self.roomname}"
    
class Booking(models.Model):
    booking_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(Users, on_delete=models.CASCADE)
    hotel = models.ForeignKey(Hotels, on_delete=models.CASCADE)
    room = models.ForeignKey(Rooms, on_delete=models.CASCADE)
    name = models.CharField(max_length = 100)
    email = models.CharField(max_length = 200)
    phonenumber = models.IntegerField()
    address = models.CharField()
    checkin = models.DateField()
    checkout = models.DateField()
    total = models.IntegerField()
    STATUS_TYPES = [
        ('active', 'Active'),
        ('processing', 'Processing'), 
    ]
    status = models.CharField(
        max_length=10,
        choices=STATUS_TYPES,
        default='processing',  # Giá trị mặc định có thể là 'active' hoặc 'processing'
    )
    def __str__(self):
        return f"{self.id},{self.user}, {self.hotel}, {self.room}, {self.name}, {self.email},{self.phonenumber}, {self.address}, {self.checkin}, {self.checkout},  {self.total}, {self.status}"   
