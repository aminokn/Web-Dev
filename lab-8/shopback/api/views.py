from django.forms import model_to_dict
from django.http import JsonResponse
from .models import Product, Category

def products(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)

products = [
    {
        'id': _id,
        'name': f'Product {_id}',
        'price': _id * 1000
    }
    for _id in range(1, 10)
]

def product(request, id):
    product = Product.objects.filter(id=id).first()
    if product:
        data = {"product": model_to_dict(product)}
    else:
        data = {"error": "Product not found"}
    return JsonResponse(data)

def categories(request):
    categories = Category.objects.all()
    data = {"categories": list(categories.values())}
    return JsonResponse(data)

def category(request, id):
    category = Category.objects.filter(id=id).first()
    if category:
        data = {"category": model_to_dict(category)}
    else:
        data = {"error": "Category not found"}
    return JsonResponse(data)

def category_products(request, id):
    category = Category.objects.filter(id=id).first()
    if category:
        products = Product.objects.filter(category=category)
        data = {"products": list(products.values())}
    else:
        data = {"error": "Category not found"}
    return JsonResponse(data)
