# Kontrolörlerin Organizasyonu

Uygulama dosyalarının daha düzenli ve sürdürülebilir bir yapıya kavuşması için **kontrolörleri** yeniden organize edeceğiz. Bu düzenleme, hem kod okunabilirliğini artıracak hem de geliştirme sürecinde modülerliği sağlayacaktır.

- `src/controllers` adında bir klasör oluşturacağız ve burada istekleri işlemek için fonksiyonları saklayacağız. `src/routes/students.js` dosyasında bulunan kontrolörleri `src/controllers/students.js` dosyasına taşıyacağız.

Aşağıdaki kodu elde edeceğiz:

```
// src/controllers/students.js

import { getAllStudents, getStudentById } from '../services/students.js';

export const getStudentsController = async (req, res) => {
  const students = await getAllStudents();

  res.json({
    status: 200,
    message: 'Successfully found students!',
    data: students,
  });
};

export const getStudentByIdController = async (req, res) => {
  const { studentId } = req.params;
  const student = await getStudentById(studentId);

  // Öğrenci bulunamazsa cevap
  if (!student) {
    res.status(404).json({
	    message: 'Student not found'
    });
    return;
  }

	// Öğrenci bulunursa cevap
  res.json({
    status: 200,
    message: `Successfully found student with id ${studentId}!`,
    data: student,
  });
};
```

Bundan sonra kontrolörleri rota dosyasında kullanacağız.

```
// src/router/students.js

import { Router } from 'express';

import {
  getStudentsController,
  getStudentByIdController,
} from '../controllers/students.js';

const router = Router();

router.get('/students', getStudentsController);
router.get('/students/:studentId', getStudentByIdController);

export default router;
```