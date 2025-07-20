from django.db import models

class Meal(models.Model):
    name = models.CharField(max_length=100)
    calories = models.PositiveIntegerField()
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.calories} kcal"
