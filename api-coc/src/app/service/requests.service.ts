import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class RequestsService {
    constructor(private http: HttpClient) { }

    searchInfoPlayer(param1: string) {
        //Posso inserire i parametri (tra cui il token) nell'url
        const url = `https://api.clashofclans.com/v1/players/?q=${param1}`;
        //Se necessario aggiungo informazioni all'header HTTP
        const headers = new HttpHeaders({
          Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImJhMWNiNjg4LWYwYzAtNGY1Zi1hNDUyLWYwNTJhODk2ZWM3NSIsImlhdCI6MTY5OTUxODI1NCwic3ViIjoiZGV2ZWxvcGVyL2M2NzAzYTZiLTRlYzMtMmRmMS05NWQ4LWRlNWFlM2Q1Y2Y3NyIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjUuMTcyLjY0LjIwIl0sInR5cGUiOiJjbGllbnQifV19.X1MIDzyXNilWrx_0qnxPgY7y8zLRHV9buCBHMujVoDV0dFha5Z9BrGCybAf-tYNc09fXOed8nIDVpXYv9-07eA'
        });
    
        let obsTracks = this.http.get(url, { headers });
        return obsTracks; //Ritorno un observable ai componenti che richiedono il servizio
    }
}
