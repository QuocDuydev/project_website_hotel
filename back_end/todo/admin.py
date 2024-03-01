from django.contrib import admin
from .models import User

class UserAdmin(admin.ModelAdmin):
    list_display = ("id", "username", "name", "email", "password", "joined")

admin.site.register(User, UserAdmin)