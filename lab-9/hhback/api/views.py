from django.http import JsonResponse
from .models import Company, Vacancy

# List of all Companies
def company_list(request):
    companies = Company.objects.all()
    companies_json = [c.to_json() for c in companies]
    return JsonResponse(companies_json, safe=False)

# Get one Company
def company_detail(request, company_id):
    try:
        company = Company.objects.get(pk = company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=404)

    return JsonResponse(Company.to_json(), status=200)


# List of Vacancies by Company
def vacancies_by_company(request, vacancy_id):
    try:
        vacancies = Vacancy.objects.get(company_id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=404)

    return JsonResponse(Company.to_json(), status=200)

# List of all Vacancies
def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json= [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)

# Get one Vacancy
def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(pk = vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=404)

    return JsonResponse(Vacancy.to_json(), status=200)

# List of top 10 vacancies sorted by decreasing salary
def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)
