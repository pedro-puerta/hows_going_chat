import json
import boto3
from boto3.dynamodb.conditions import Key

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Mensagens')

def lambda_handler(event, context):
    response = table.scan()
    return response['Items']
