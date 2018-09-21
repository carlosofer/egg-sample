<html>
    <head>
        <title>{{ user.username }} cards</title>
        <link rel="stylesheet" href="/public/css/card.css" />
    </head>
    <body>
        <table id="bank-table">
            <tr class="bank-table-row">
                <th>Bank</th>
                <th>Branch</th>
                <th>Card Number</th>
            </tr>
            {% for card in cards %}
                <tr class="bank-table-row">
                    <td>{{ card.bank }}</td>
                    <td>{{ card.branch }}</td>
                    <td>{{ card.cardno }}</td>
                </tr>
            {% endfor %}
        </table>
    </body>
</html>