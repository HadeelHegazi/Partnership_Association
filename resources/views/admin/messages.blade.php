<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Messages - Admin Panel</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; background-color: #f5f5f5; }
        .container { max-width: 1200px; margin: 0 auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        h1 { color: #1f2937; text-align: center; margin-bottom: 30px; }
        .stats { background: #e5e7eb; padding: 15px; border-radius: 6px; margin-bottom: 20px; text-align: center; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
        th { background-color: #f8fafc; font-weight: bold; color: #374151; }
        tr:hover { background-color: #f9fafb; }
        .message-cell { max-width: 300px; word-wrap: break-word; }
        .date-cell { white-space: nowrap; }
        .no-messages { text-align: center; padding: 40px; color: #6b7280; font-style: italic; }
        .back-link { display: inline-block; margin-bottom: 20px; color: #3b82f6; text-decoration: none; }
        .back-link:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <div class="container">
        <a href="/" class="back-link">← Back to Website</a>
        
        <h1>📧 Contact Messages</h1>
        
        <div class="stats">
            <strong>Total Messages: {{ $messages->count() }}</strong>
        </div>

        @if($messages->count() > 0)
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($messages as $index => $message)
                        <tr>
                            <td>{{ $index + 1 }}</td>
                            <td><strong>{{ $message->name }}</strong></td>
                            <td>{{ $message->email }}</td>
                            <td class="message-cell">{{ $message->message ?: 'No message' }}</td>
                            <td class="date-cell">{{ $message->created_at->format('M d, Y H:i') }}</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        @else
            <div class="no-messages">
                <h3>No messages yet</h3>
                <p>When someone submits the contact form, their messages will appear here.</p>
            </div>
        @endif
    </div>
</body>
</html>
