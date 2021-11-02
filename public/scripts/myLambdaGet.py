import json
import boto3
from boto3.dynamodb.conditions import Key


# Conexão com o Banco de Dados DynamoDB
dynamodb = boto3.resource('dynamodb')

# Conexão com a Tabela de Mensagens
tabela = dynamodb.Table('Mensagens')


def lambda_handler(event, context):
    response = tabela.query(
        KeyConditionExpression = Key('from').eq(event['from'])
    )
    
    items = []

    for x in response['Items']:
        if x['to'] == event['to']:
            items.append(x)
    
    if items == []:
        return None
    return items