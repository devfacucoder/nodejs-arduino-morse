int led = 13;
int dotTime = 200; 

void setup() {
  pinMode(led, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  if (Serial.available()) {
    char c = Serial.read();

    if (c == '.') { 
      digitalWrite(led, HIGH);
      delay(dotTime );

      digitalWrite(led, LOW);
      delay(dotTime );
    }
    else if (c == '-') { 
      digitalWrite(led, HIGH);
      delay(dotTime * 3);
      digitalWrite(led, LOW);
      delay(dotTime );
    }
    else if (c == ' ') { 
      delay(dotTime * 3);
    }
    else if (c == '/') { 
      delay(dotTime * 7);
    }
  }
}
