from django.http import JsonResponse

def meal_list(request):
    return JsonResponse({"message": "Meals list"})